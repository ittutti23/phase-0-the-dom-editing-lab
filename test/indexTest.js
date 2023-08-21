require("./helpers.js");

describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("<body>");
  });
  it("contains a </body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("</body>");
  });
  it("contains an <h1> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h1>");
  });
  it("contains a <p> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<p>");
  });
  it("within the <p>, it contains a <strong> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<strong>");
  });
  it("within the <p>, it contains an <em> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<em>");
  });
  it("contains an <h1> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h1>");
  });
  
  it("contains an <h1> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h1>");
  });
it("contains an <h2> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h2>");
  });

});

