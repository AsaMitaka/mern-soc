const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  const mimeTypes = ['image/png', 'image/jpeg', 'image/gif'];
  if (!mimeTypes.includes(file.mimetype)) {
    const error = new Error('Invalid file type: ');
    cb(error, false);
  }
  cb(null, true);
}

const upload = multer({
  fileFilter,
  limits: { fileSize: 3 * 1024 * 1024 }, // 3145728 3 mb
  storage,
});

module.exports = upload;
