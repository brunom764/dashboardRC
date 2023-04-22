import { render } from "@testing-library/react"

import Team from "./index"

describe("<LoadingScreen />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Team />)

    expect(container).toMatchSnapshot()
  })
})