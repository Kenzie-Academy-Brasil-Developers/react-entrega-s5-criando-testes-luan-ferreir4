context("CEP search", ()=>{
    it("should access the app page",()=>{
        cy.visit('http://localhost:3000')
        cy.viewport(1440,900)
    })
    it("should search for an address",()=>{
        cy.viewport(1440,900)

        cy.intercept("GET", "70040010",{
            statusCode: 200,
            body: {
                bairro: "Asa Norte",
                cep: "70040010",
                cidade: "Brasília",
                cidade_info: { area_km2: "5779,999", codigo_ibge: "5300108" },
                estado: "DF",
                estado_info: {
                  area_km2: "5.779,999",
                  codigo_ibge: "53",
                  nome: "Distrito Federal",
                },
                logradouro: "SBN Quadra 1",
              }
        });

        cy.get("input[type=number]").type(73330026);
        cy.get('button[data-testid=button-search]').click();

        cy.contains("Logradouro")
        cy.contains("Estado")
    })
})