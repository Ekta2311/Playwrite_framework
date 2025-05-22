module.exports = {
  default: {
    timeout: 20000, // 20 seconds
    require: ['features/stepdefinition/*.js', 'features/Support/*.js'],
    format: ['progress-bar']  // ✅ Fixed formatter
  }
};

