const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("shoul return the greeting message", () => {
    const result = lib.greet("Matheus");
    expect(result).toMatch(/Matheus/);
    expect(result).toContain("Matheus"); //testes de stringn nao podem ser muito especificos, pois qualquer mudança pode deixa-lo inutilizavel
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    // Muito generico
    // expect(result).toBeDefined();
    // expect(result).not.toBeNull();

    //  Muito específico
    // expect(result[0]).toBe("USD");
    // expect(result[1]).toBe("AUD");
    // expect(result[2]).toBe("EUR");
    // expect(result.length).toBe(3);

    // Forma adequada
    // expect(result).toContain("USD");
    // expect(result).toContain("AUD");
    // expect(result).toContain("EUR");

    // Forma ideal
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // Se objeto tiver que ser EXATAMENTE da forma do teste
    // expect(result).toEqual({ id: 1, price: 10 });

    // Se objeto puder ser alterado mas so essas propriedades importam para o teste
    expect(result).toMatchObject({ id: 1, price: 10 });

    // Testa se uma propriedade existe e se seu valor é o mesmo, o tipo do valor é importante
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    // Falsy = valores igualados a false
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((element) => {
      expect(() => lib.registerUser(element)).toThrow();
    });
  });

  it("should return a user object if input is a valid username", () => {
    const result = lib.registerUser("mhid");
    expect(result).toMatchObject({ username: "mhid" });
    expect(result.id).toBeGreaterThan(0);
  });
});
