import { render } from "@testing-library/react"

import TV from "./index"

describe("<TV/>", () => {
  it("should match snapshot", () => {
    const { container } = render(<TV />)

    expect(container).toMatchSnapshot()
  })
})





