// Generated by CoffeeScript 1.4.0
(function() {
  var ShowdownLive,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ShowdownLive = (function() {

    function ShowdownLive(selector) {
      var converter, height, html, livenode, width;
      this.selector = selector;
      this.keyhandle = __bind(this.keyhandle, this);

      this.selector = $(this.selector);
      width = this.selector.width();
      height = this.selector.height();
      this.selector.css('display', 'none');
      this.livenode = $('<div contenteditable="true" class="showdown-live"></div>');
      this.livenode.insertAfter(this.selector);
      this.livenode.css('width', width);
      this.livenode.css('height', height);
      selector = this.selector;
      livenode = this.livenode;
      this.livenode.bind('keyup', this.keyhandle);
      converter = new Showdown.converter();
      html = converter.makeHtml(this.selector.val());
      this.livenode.html(html);
      this.log("Initing #" + (this.selector.attr('id')) + " as ShowdownLive");
    }

    ShowdownLive.prototype.keyhandle = function(e) {
      var lines, shdlv_html;
      shdlv_html = this.livenode.html();
      shdlv_html = shdlv_html.replace(/<p>/g, "\n");
      shdlv_html = shdlv_html.replace(/<\/p>/g, "\n");
      shdlv_html = shdlv_html.replace(/<br>/g, "\n");
      lines = this.selector.val().split("\n");
      return this.log(lines);
    };

    ShowdownLive.prototype.log = function(message) {
      return console.log(message);
    };

    return ShowdownLive;

  })();

  window.ShowdownLive = ShowdownLive;

}).call(this);