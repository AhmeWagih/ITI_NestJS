import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
}, { timestamps: true });

export const BookmarkSchema = mongoose.model('Bookmark', bookmarkSchema);
