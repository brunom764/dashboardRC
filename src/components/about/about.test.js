import { render } from "@testing-library/react"

import About from "./index"

describe("<About />", () => {
  it("should match snapshot", () => {
    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})