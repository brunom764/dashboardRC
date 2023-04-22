import { render } from "@testing-library/react"

import LoadingScreen from "./index"

describe("<LoadingScreen />", () => {
  it("should match snapshot", () => {
    const { container } = render(<LoadingScreen />)

    expect(container).toMatchSnapshot()
  })
})