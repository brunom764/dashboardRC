import { render } from "@testing-library/react"

import Partness from "./index"

describe("<Partness />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Partness />)

    expect(container).toMatchSnapshot()
  })
})
