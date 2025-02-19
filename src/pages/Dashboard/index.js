import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard=()=>{
    return(
        <>
        <section>
            <div className="Dashboard-container">
                <div className="left">
                    <Sidebar/>
                </div>
                <div className="right">
                    right
                </div>
            </div>
        </section>

        </>
    )
};
export default Dashboard;