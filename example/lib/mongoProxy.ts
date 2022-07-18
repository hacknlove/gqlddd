// @ts-nocheck

import { MongoClient } from 'mongodb';

const mongoURL = process.env.MONGO_URL;
let res;
const mongo = {};
const mongo2 = {};

const mongoHandler = {
  get(target, name) {
    if (target[name]) {
      return target[name];
    }
    if (!target.db) {
      return null;
    }
    if (target.db[name]) {
      return target.db[name];
    }
    return target.db.collection(name);
  },
};

let maxTries;

const PAYSITES_DB = process.env.PAYSITES_DB || 'paysite';
const PROFILE_DATA_SERVICE_DB = process.env.PROFILE_DATA_SERVICE_DB || 'profile-data-service';

const mongoProxy = new Proxy(mongo, mongoHandler);

async function mongoConnect() {
  const client = await MongoClient.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => ({ err }));

  if (client.err) {
    if (maxTries--) {
      mongoConnect();
      return;
    }
    console.error(client.err)
    process.exit(1);
  }

  mongo.client = client;

  mongo.db = client.db(PAYSITES_DB);
  mongo2.db = client.db(PROFILE_DATA_SERVICE_DB);
  mongo.client = client;
  mongo2.client = client;

  mongo.connect = () => undefined;
  res(mongo.db);
}

function reconnect() {
  maxTries = 10;
  mongo.waitFor = new Promise((resolve) => {
    res = resolve;
  });
  mongo2.waitFor = mongo.waitFor;
  mongo.db = null;
  mongoConnect();
}

reconnect();
mongoProxy.connect = reconnect;

export default mongoProxy;

export const profileDataService = new Proxy(mongo2, mongoHandler);
