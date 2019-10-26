import React from 'react'

class SearchResult extends React.Component {
    render () {
        return (
            <div className="searchresult">
                <table>
                    <th>SNI 2007-kod</th>
                    <th>Aktivitetsrubrik</th>
                    <th>Omfattar-text</th>
                    <th>Allmän-text</th>
                    <tr>
                        <td>01.133</td>
                        <td>Odling av grönsaker (köksväxter) på friland</td>
                        <td>01.133</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>01.133</td>
                        <td>Odling av grönsaker (köksväxter) på friland</td>
                        <td>01.133</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default SearchResult