import findOneVideo from "./controller/findOneVideo";

export default function (_parent, args, _context, _info) {
  return findOneVideo(args);
}
