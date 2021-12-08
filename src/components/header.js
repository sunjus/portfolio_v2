import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { theme, mixins } from "../style"

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.navbarHeight};
  padding: 0px 50px;
  background-color: ${theme.colors.navy};
  transition: ${theme.transition};
  z-index: 10;
  &.nav-down {
    box-shadow: 0 2px 4px ${theme.colors.transNavy};
    height: ${theme.navbarScrollHeight};
  }
  &.nav-up {
    height: ${theme.navbarScrollHeight};
    transform: translateY(-${theme.navbarScrollHeight});
  }
`

const Header = () => <HeaderContainer></HeaderContainer>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
