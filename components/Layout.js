import Navbar from './Navbar'
import PageHead from './PageHead'

const Layout = ({ children }) => {
    const layout = {
        width: '1280px',
        margin: 'auto',
        backgroundColor: 'rgb(12,12,12)'
    }
    return (
        <div style={layout}>
            <PageHead />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout