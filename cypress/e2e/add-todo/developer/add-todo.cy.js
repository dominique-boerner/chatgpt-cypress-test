const todoPage = require("../../../support/selectors/todo-page");

describe("as a user, i want to add a todo", () => {
  it("add a todo", () => {
    cy.visit("http://localhost:8080");

    cy.get(todoPage.todoInput).type("Clean up");
    cy.get(todoPage.todoAddButton).click();

    cy.get(todoPage.todoListInitialState).should("not.exist");
    cy.get(todoPage.todoList).contains("Clean up");
  });
});
