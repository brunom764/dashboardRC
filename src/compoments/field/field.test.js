import { render } from "@testing-library/react"

import Field from "./index"

describe("<Field />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Field />)

    expect(container).toMatchSnapshot()
  })
})