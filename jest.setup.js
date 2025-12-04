import "@testing-library/jest-dom"
import { jest } from "@jest/globals"
import { beforeEach } from "@jest/globals"

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}

global.localStorage = localStorageMock

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks()
})
