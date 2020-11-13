import React from "react"
import { Link } from "react-router-dom"
import style from "./HorizontalMenu.module.css"

const HorizontalMenu = (props) => {
    const styleSlider = {
        width: props.width,
        left: props.left
    }

    return (
        <div>
            <ul ref={props.menuRef} className={style.horizontalMenu}>
                {props.data.map(({ path, name, id, isActive }) => (
                    <li ref={isActive ?props.itemRef :null} className={style.menuItem} key={id}>
                        <Link
                            className={isActive ?style.active :null}
                            onClick={() => { props.setUpHorizontalMenu(path) }}
                            to={path}
                        >{name}</Link>
                    </li>
                ))}
            </ul>
            <div className={style.line}>
                <div style={styleSlider} className={style.slider}></div>
            </div>
        </div>
    )
}

class HorizontalMenuClassContainer extends React.Component {
    constructor(props) {
        super(props)

        const activeEl = props.data.find(v => v.isActive);

        this.state = {
            menuRef: React.createRef(),
            itemRef: React.createRef(),
            idActive: activeEl !== undefined ? activeEl.id : undefined,
            width: 0,
            left: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const activeEl = nextProps.data.find(v => v.isActive);

        const id = activeEl !== undefined ? activeEl.id : undefined;
        return this.state.idActive !== id || 
            nextState.width !== this.state.width || 
            nextState.left !== this.state.left;
    }

    componentDidMount() {
        this.setUp()
    }

    componentDidUpdate(prevProps, prevState) {
        this.setUp()
    }

    setUp() {
        let leftItem = 0;
        let leftMenu = 0;

        if (this.state.itemRef.current !== null && this.state.menuRef.current !== null) {
            leftItem = this.state.itemRef.current.getBoundingClientRect().left;
            leftMenu = this.state.menuRef.current.getBoundingClientRect().left;
        }

        const activeEl = this.props.data.find(v => v.isActive);

        let width = 0;
        if (this.state.itemRef.current !== null) {
            width =  this.state.itemRef.current.offsetWidth;
        }

        this.setState({
            ...this.state,
            idActive:  activeEl !== undefined ? activeEl.id : activeEl,
            width,
            left: leftItem - leftMenu
        })
    }

    render() {
        return (
            <HorizontalMenu
                {...this.props}
                itemRef={this.state.itemRef}
                menuRef={this.state.menuRef}
                width={this.state.width}
                left={this.state.left}
            />
        )
    }
}

export default HorizontalMenuClassContainer