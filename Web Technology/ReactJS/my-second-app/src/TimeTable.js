export default function TimeTable(){
    return(<>
        <ul className="nav nav-tabs" id="myTab" role="tab-list">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="Mon-tab" data-bs-toggle="tab" data-bs-target="#Mon-tab-pane" type="button" role="tab" aria-controls="Mon-tab-pane" aria-selected="true">Mon</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Tue-tab" data-bs-toggle="tab" data-bs-target="#Tue-tab-pane" type="button" role="tab" aria-controls="Tue-tab-pane" aria-selected="false">Tue</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Wed-tab" data-bs-toggle="tab" data-bs-target="#Wed-tab-pane" type="button" role="tab" aria-controls="Wed-tab-pane" aria-selected="false">Wed</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Thus-tab" data-bs-toggle="tab" data-bs-target="#Thus-tab-pane" type="button" role="tab" aria-controls="Thus-tab-pane" aria-selected="false">Thus</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Fri-tab" data-bs-toggle="tab" data-bs-target="#Fri-tab-pane" type="button" role="tab" aria-controls="Fri-tab-pane" aria-selected="false">Fri</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Sat-tab" data-bs-toggle="tab" data-bs-target="#Sat-tab-pane" type="button" role="tab" aria-controls="Sat-tab-pane" aria-selected="false">Sat</button>
            </li>
        </ul>

        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="Mon-tab-pane" role="tab-panel" aria-labelled-by="Mon-tab" tab-index="0">
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">7:45 AM to 8:40 AM</div>
                        <div className="col">2101CS304-WT</div>
                        <div className="col">CEAVB</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
            <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">8:40 AM to 9:35 AM</div>
                        <div className="col">2101CS303-DF</div>
                        <div className="col">CEKDV</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Tutorial</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">9:50 AM to 11:30 AM</div>
                        <div className="col">2101CS303-DF</div>
                        <div className="col">CENRV</div>
                        <div className="col">Class-C-204</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lab</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">12:10 AM to 1:50 AM</div>
                        <div className="col">2101CS304-WT</div>
                        <div className="col">CEKMS</div>
                        <div className="col">Lab-C-305</div>
                    </div>
                </div>  
            </div>        
        </div>

        <div className="tab-pane fade" id="Tue-tab-pane" role="tab-panel" aria-labelled-by="Tue-tab" tab-index="0">
        <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">7:45 AM to 8:40 AM</div>
                        <div className="col">2101CS301-DS</div>
                        <div className="col">CEPUJ</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
            <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">8:40 AM to 9:35 AM</div>
                        <div className="col">2101CS302-DBMS-II</div>
                        <div className="col">CENRV</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lab</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">9:50 AM to 11:30 AM</div>
                        <div className="col">2101CS303-DBMS-II</div>
                        <div className="col">CEDBK</div>
                        <div className="col">Lab-A-207(2)</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lab</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">12:10 AM to 1:50 AM</div>
                        <div className="col">2101CS302-DS</div>
                        <div className="col">SEVJK</div>
                        <div className="col">Lab-C-308</div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="tab-pane fade" id="Wed-tab-pane" role="tab-panel" aria-labelled-by="Wed-tab" tab-index="0">
        <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">7:45 AM to 8:40 AM</div>
                        <div className="col">2101HS302-DM</div>
                        <div className="col">HSDDB</div>
                        <div className="col">Class-G-106</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
            <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">8:40 AM to 9:35 AM</div>
                        <div className="col">2101HS302-DM</div>
                        <div className="col">GNNJK</div>
                        <div className="col">Class-G-106</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lab</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">9:50 AM to 11:30 AM</div>
                        <div className="col">2101CS303-DBMS-II</div>
                        <div className="col">SEVJK</div>
                        <div className="col">Lab-A-308</div>
                    </div>
                </div>
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">12:10 AM to 1:00 AM</div>
                        <div className="col">2101CS302-DBMS-II</div>
                        <div className="col">CENRV</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>  
            </div>
            <div className="shadow p-3 mb-3 bg-body rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">Time</div>
                        <div className="col">Lecture</div>
                        <div className="col">Teacher</div>
                        <div className="col">Place</div>
                    </div>
                    <div className="row">
                        <div className="col">1:00 AM to 1:50 AM</div>
                        <div className="col">2101CS301-DS</div>
                        <div className="col">CEPUJ</div>
                        <div className="col">Auditorium-AUD-1</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tab-pane fade" id="Thus-tab-pane" role="tab-panel" aria-labelled-by="Thus-tab" tab-index="0">Thusday</div>
        <div className="tab-pane fade" id="Fri-tab-pane" role="tab-panel" aria-labelled-by="Fri-tab" tab-index="0">Friday</div>
        <div className="tab-pane fade" id="Sat-tab-pane" role="tab-panel" aria-labelled-by="Sat-tab" tab-index="0">Saturday</div>
        </div>
    </>);
}