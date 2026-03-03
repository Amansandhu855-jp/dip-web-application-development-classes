// Challenge - Stage 4
import data from "./userobjects.js";

/**
 * State-based UI Component
 * @param {String} selector The selector for the target elementent
 * @param {Object} options  Component options
 */
let UserComponent = function (selector, options) {
  this.element = document.querySelector(selector);
  this.data = options.data;
  this.template = options.template;
};

/**
 * Render a new UI
 */
UserComponent.prototype.render = function () {
  this.element.innerHTML = this.template(this.data);
};

// console.log(`The data I have is: ${data}`);

// The list of books
let app = new UserComponent("#app", {
  data,
  //   template: function (props) {
  //     console.log(props);
  //     let html =
  //       "<ul>" +
  //       // Loop through the props array wrapping each item in a <li>
  //       props
  //         .map(function (prop) {
  //           return "<li>" + prop.firstName + "</li>";
  //         })
  //         .join("") +
  //       "</ul>";
  //     return html;
  //   },

  template: (props) => {
    const items = props
      .map((prop) => `<li>${prop.firstName} ${prop.lastName}</li>`)
      .join("");
    return `<section  class="news-article"><ol>${items}</ol><section>`;
  },
});

// Render the list
app.render();

// Update the UI
app.data.books.push("Harry Potter IV");
app.data.books.push("Harry Potter V");
app.render();
