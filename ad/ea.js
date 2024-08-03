const playbackText = {
  /**
   * Center-aligns the given text within the specified width.
   * @param {string} text - The text to be center-aligned.
   * @param {number} width - The total width within which to align the text.
   * @returns {string} - The center-aligned text.
   */
  centerAlignText: function(text, width) {
    if (typeof text !== 'string' || typeof width !== 'number' || width < text.length) {
      throw new Error('Invalid input');
    }

    const paddingLeft = Math.floor((width - text.length) / 2);
    const paddingRight = width - text.length - paddingLeft;

    const paddedText = ' '.repeat(paddingLeft) + text + ' '.repeat(paddingRight);
    return paddedText;
  }
};

// Example usage
const text = "Hello, World!";
const width = 30;

console.log(playbackText.centerAlignText(text, width));
// Output:
// "        Hello, World!         "
