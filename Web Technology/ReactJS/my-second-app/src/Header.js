export default function Header(){
    return(
        <>
        <div className="rounded-5" style={{
            backgroundColor:"black",
            height:"200px",
        }} >
            <div>
                <div className="fs-2 fw-bold float-start WhiteColour" >Diet</div>
                <div><img className="float-end" src="dimg.jpg"/></div>
            </div>
            <div className="hello" />

            <div>
                <div className="fw-bold text-warning" >Raja Divyank Vipulbhai</div>
                <div className="WhiteColour">(21010101152)</div>
                <div className="WhiteColour" >8238160523 | 21010101152@darshan.ac.in</div>
            </div>
            <div className="hello"/>
            <div className="container text-center" >
                <div className="row" >
                    <div className="col" >Branch</div>
                    <div className="col">Sem</div>
                    <div className="col">Division</div>
                    <div className="col">Roll No.</div>
                </div>
                <div className="row">
                    <div className="WhiteColour col">B.Tech.-CSE</div>
                    <div className="WhiteColour col">3</div>
                    <div className="WhiteColour col">CSE-3C</div>
                    <div className="WhiteColour col">348</div>
                </div>
            </div>
            <div className="hello" />
        </div>
        </>
    );
}
