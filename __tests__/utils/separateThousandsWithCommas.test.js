import separateThousandsWithCommas from "../../utils/separateThousandsWithCommas";

describe("Thousand separator", () => {
  it("Separates commas correctly", () => {
    const result = separateThousandsWithCommas(8838383);
    expect(result).toBe("8,838,383");
  });

  it("Returns exponents as it is", () => {
    const result = separateThousandsWithCommas(8.818574887992003e+26);
    expect(result).toBe("8.818574887992003e+26");
  });

  it("Returns 2 digits as it is", () => {
    const result = separateThousandsWithCommas(44);
    expect(result).toBe("44");
  });

  it("It does not put commas in the decimal part", () => {
    const result = separateThousandsWithCommas(4478.89876);
    expect(result).toBe("4,478.89876");
  });

  it("Handles negative number correctly", () => {
    const result = separateThousandsWithCommas(-676543);
    expect(result).toBe("-676,543");
  });
  
  it("Handles Infinity", () => {
    const result = separateThousandsWithCommas(Infinity);
    expect(result).toBe("Infinity");
  });
});
