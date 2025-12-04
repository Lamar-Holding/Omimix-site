"use client"

import { renderHook, act } from "@testing-library/react"
import { useTheme } from "@/hooks/use-theme"

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("dark")
  })

  it("should initialize with light theme as default", () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      // Wait for mount
    })

    expect(result.current.theme).toBe("light")
    expect(localStorage.getItem("omimix-theme")).toBe("light")
  })

  it("should toggle theme from light to dark", () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe("dark")
    expect(localStorage.getItem("omimix-theme")).toBe("dark")
    expect(document.documentElement.classList.contains("dark")).toBe(true)
  })

  it("should toggle theme from dark back to light", () => {
    localStorage.setItem("omimix-theme", "dark")
    document.documentElement.classList.add("dark")

    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe("light")
    expect(localStorage.getItem("omimix-theme")).toBe("light")
    expect(document.documentElement.classList.contains("dark")).toBe(false)
  })

  it("should persist theme to localStorage", () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
      result.current.toggleTheme()
    })

    expect(localStorage.getItem("omimix-theme")).toBe("light")
  })
})
