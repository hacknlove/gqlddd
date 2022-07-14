import { resolvers as videoResolvers } from './video/resolvers';

function mergeResolvers(resolvers: any) {
  const response:any = {
    Query: {},
    Mutation: {},
  };

  for (const resolver of resolvers) {
    response.Query = { ...response.Query, ...resolver.Query };
    response.Mutation = { ...response.Mutation, ...resolver.Mutation };
    for (const type in resolver) {
      if (type === 'Query' || type === 'Mutation') {
        continue;
      }
      response[type] = { ...response[type], ...resolver[type] };
    }
  }

  return response;
}

export const resolvers = mergeResolvers([videoResolvers]);

