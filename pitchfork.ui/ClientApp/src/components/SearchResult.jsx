import React from 'react'

class SearchResult extends React.Component {

    state = {
        departments: []
    }

    componentDidMount() {
        fetch('https://localhost:44388/api/sni/departments')
            .then(res => res.json())
            .then((data) => {
                this.setState({ departments: data })
            })
            .catch(console.log)
    }

    render() {
        const mockHierarchyResult = [
            {
                _id: "1",
                sni2007: "A",
                activity: "Jordbruk, skogsbruk och fiske",
                contains: "",
                ordinary: "A",
            }, {
                _id: "2",
                sni2007: "01",
                activity: "Jordbruk och jakt samt service i anslutning härtill",
                contains: "",
                ordinary: "01",
            }, {
                _id: "3",
                sni2007: "01.1",
                activity: "Odling av grönsaker och meloner, rotfrukter och stam- eller rotknölar",
                contains: "",
                ordinary: "01.1",
            }, {
                _id: "4",
                sni2007: "01.13",
                activity: "Odling av ett- och tvååriga växter",
                contains: "",
                ordinary: "",
            }, {
                _id: "5",
                sni2007: "01.133",
                activity: "Odling av grönsaker (köksväxter) på friland",
                contains: "01.133",
                ordinary: "",
            }
        ];

        return (
            <div className="searchresult">
                <center>HIERARCHICAL RESULT</center>
                <table className="center">
                    <thead>
                        <tr>
                            <th>SNI 2007-kod</th>
                            <th>Aktivitetsrubrik</th>
                            <th>Omfattar-text</th>
                            <th>Allmän-text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockHierarchyResult.map((mockHierarchyResult) => {
                            return (
                                <tr key={mockHierarchyResult._id}>
                                    <td>{mockHierarchyResult.sni2007}</td>
                                    <td>{mockHierarchyResult.activity}</td>
                                    <td>{mockHierarchyResult.contains}</td>
                                    <td>{mockHierarchyResult.ordinary}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <center>DEPARTMENTS RESULT</center><br />
                <center>Showing all departments</center>
                <table className="center">
                    <thead>
                        <tr>
                            <th>Avdelning</th>
                            <th>Aktivitetsart</th>
                            <th>Branch</th>
                            <th>Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.departments.map((departments) => {
                            return (
                                <tr key={departments.departmentId}>
                                    <td>{departments.departmentId}</td>
                                    <td>{departments.activity}</td>
                                    <td>{departments.industry}</td>
                                    <td>{departments.standard}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default SearchResult