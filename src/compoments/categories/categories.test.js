import { render } from "@testing-library/react"

import Categories from "./index"

describe("<Categories />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Categories />)

    expect(container).toMatchSnapshot()
  })
})