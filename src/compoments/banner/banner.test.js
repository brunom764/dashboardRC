import { render } from "@testing-library/react"

import Banner from "./index"

describe("<Banner />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Banner />)

    expect(container).toMatchSnapshot()
  })
})