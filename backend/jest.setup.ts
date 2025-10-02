
//mock axios globally
jest.mock("axios");

//reset all mocks automatically between tests
afterEach(() => {
    jest.resetAllMocks();
});