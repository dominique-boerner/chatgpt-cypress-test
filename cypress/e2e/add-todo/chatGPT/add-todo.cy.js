describe("Adding a todo item", () => {
  it("should add a todo item and check if it is displayed in the list", () => {
    cy.visit(
      "https://dominique-boerner.github.io/chatgpt-cypress-test/example/"
    );

    // Find the input field and type the todo text
    cy.get(".todo-input").type("Buy groceries");

    // Find the add button and click it
    cy.get(".add-todo").click();

    // Find the todo list and check if the added todo is displayed in it
    cy.get(".todo-list li")
      .should("have.length", 1)
      .and("contain", "Buy groceries");
  });
});
