import "./index.scss"

const MainLayout = ({ children }) => {
    return(
        <div className="t-main-layout">
            <div className="t-main-layout-bg-fix" />
            <div className="t-main-layout-body">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;