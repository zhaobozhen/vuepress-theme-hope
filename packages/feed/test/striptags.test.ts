import { describe, it } from 'mocha';
import striptags, { streamingMode } from '../src/striptags';
import { expect } from 'chai';

describe('striptags', () => {
  describe('with no optional parameters', () => {
    it('should not strip invalid tags', () => {
      const text = 'lorem ipsum < a> < div>';

      expect(striptags(text)).to.be.equal(text);
    });

    it('should remove simple HTML tags', () => {
      const html = '<a href="">lorem <strong>ipsum</strong></a>';
      const text = 'lorem ipsum';

      expect(striptags(html)).to.be.equal(text);
    });

    it('should remove comments', () => {
      const html = '<!-- lorem -- ipsum -- --> dolor sit amet';
      const text = ' dolor sit amet';

      expect(striptags(html)).to.be.equal(text);
    });

    it('should strip tags within comments', () => {
      const html = '<!-- <strong>lorem ipsum</strong> --> dolor sit';
      const text = ' dolor sit';

      expect(striptags(html)).to.be.equal(text);
    });

    it('should not fail with nested quotes', () => {
      const html = '<article attr="foo \'bar\'">lorem</article> ipsum';
      const text = 'lorem ipsum';

      expect(striptags(html)).to.be.equal(text);
    });
  });

  describe('#allowedTags', () => {
    it('should parse a string', () => {
      const allowedTags = '<strong>';
      const html = '<strong>lorem ipsum</strong>';

      expect(striptags(html, allowedTags)).to.be.equal(html);
    });

    it('should take an array', () => {
      const html = '<strong>lorem <em>ipsum</em></strong>';
      const allowedTags = ['strong', 'em'];

      expect(striptags(html, allowedTags)).to.be.equal(html);
    });
  });

  describe('with allowable_tags parameter', () => {
    it('should leave attributes when allowing HTML', () => {
      const allowedTags = '<a>';
      const html = '<a href="https://example.com">lorem ipsum</a>';

      expect(striptags(html, allowedTags)).to.be.equal(html);
    });

    it('should strip extra < within tags', () => {
      const allowedTags = '<div>';
      const html = '<div<>>lorem ipsum</div>';
      const text = '<div>lorem ipsum</div>';

      expect(striptags(html, allowedTags)).to.be.equal(text);
    });

    it('should strip <> within quotes', () => {
      const allowedTags = '<a>';
      const html = '<a href="<script>">lorem ipsum</a>';
      const text = '<a href="script">lorem ipsum</a>';

      expect(striptags(html, allowedTags)).to.be.equal(text);
    });
  });

  describe('with tag_replacement parameter', () => {
    it('should replace tags with that parameter', () => {
      const html = 'Line One<br>Line Two';
      const allowedTags: string[] = [];
      const tagReplacement = '\n';
      const text = 'Line One\nLine Two';

      expect(striptags(html, allowedTags, tagReplacement)).to.be.equal(text);
    });
  });

  describe('#streaming_mode', () => {
    it('should strip streamed HTML', () => {
      const striptagsStream = streamingMode();

      const test1 = striptagsStream('lorem ipsum <stro');
      const test2 = striptagsStream('ng>dolor sit <');
      const test3 = striptagsStream(' amet');

      expect(test1).to.be.equal('lorem ipsum ');
      expect(test2).to.be.equal('dolor sit ');
      expect(test3).to.be.equal('< amet');
    });

    it('should work with allowable_tags', () => {
      const striptagsStream = streamingMode(['strong']);

      const test1 = striptagsStream('lorem ipsum <stro');
      const test2 = striptagsStream('ng>dolor sit <');
      const test3 = striptagsStream(' amet');

      expect(test1).to.be.equal('lorem ipsum ');
      expect(test2).to.be.equal('<strong>dolor sit ');
      expect(test3).to.be.equal('< amet');
    });
  });
});
