import React from 'react'

class SearchResult extends React.Component {
    render () {
        const mockHierarchyResult = [
            {
              _id: "1",
              sni2007: "A",
              activity: "Jordbruk, skogsbruk och fiske",
              contains: "",
              ordinary: "A",
            },{
                _id: "2",
                sni2007: "01",
                activity: "Jordbruk och jakt samt service i anslutning härtill",
                contains: "",
                ordinary: "01",
            },{
                _id: "3",
                sni2007: "01.1",
                activity: "Odling av grönsaker och meloner, rotfrukter och stam- eller rotknölar",
                contains: "",
                ordinary: "01.1",
            },{
                _id: "4",
                sni2007: "01.13",
                activity: "Odling av ett- och tvååriga växter",
                contains: "",
                ordinary: "",
            },{
                _id: "5",
                sni2007: "01.133",
                activity: "Odling av grönsaker (köksväxter) på friland",
                contains: "01.133",
                ordinary: "",
            }
          ];

        const mockSearchResult = [
           {
                _id: "1",
                sni2007: "01.133",
                uppslag: "Blomkål, odling på friland",
            },{
                _id: "2",
                sni2007: "01.199",
                uppslag: "Blommor, odling på friland",
            } 
        ];

        return (
            <div className="searchresult">
                <center>HIERARCHICAL RESULT</center>
                <table class="center">
                    <thead>
                        <tr>
                            <th>SNI 2007-kod</th>
                            <th>Aktivitetsrubrik</th>
                            <th>Omfattar-text</th>
                            <th>Allmän-text</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mockHierarchyResult.map(( mockHierarchyResult ) => {
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

                <center>SEARCH RESULT</center><br />
                <center>You got XX hit(s) when searching: <b>odling friland</b></center>
                <table class="center">
                    <thead>
                        <tr>
                            <th>SNI 2007</th>
                            <th>Uppslagstext</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mockSearchResult.map(( mockSearchResult ) => {
                        return (
                            <tr key={mockSearchResult._id}>
                                <td>{mockSearchResult.sni2007}</td>
                                <td>{mockSearchResult.uppslag}</td>
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