export const queryDecorator = (query = {}): any => {
  const date = new Date();
  return {
    removed: false,
    unlisted: false,
    $or: [
      { releaseDate: { $lte: date } },
      { previewDate: { $lte: date } },
    ],
    ...query
  }
}