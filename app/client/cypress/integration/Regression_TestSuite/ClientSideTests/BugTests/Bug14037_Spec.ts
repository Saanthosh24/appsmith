import * as _ from "../../../../support/Objects/ObjectsCore";

describe("Error logged when adding a suggested table widget", function () {
  it("Bug 14037: User gets an error even when table widget is added from the API page successfully", function () {
    cy.fixture("datasources").then((datasourceFormData: any) => {
      _.apiPage.CreateAndFillApi(datasourceFormData["mockApiUrl"], "Api1");
      _.apiPage.RunAPI();

      _.apiPage.AddSuggestedWidget("TABLE_WIDGET_V2");

      _.debuggerHelper.AssertErrorCount(0);
    });
  });
});
