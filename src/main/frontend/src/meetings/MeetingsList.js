import './MeetingsList.css';

export default function MeetingsList({meetings, onDelete, onSignUp, onSignOut}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button type ="button"
                                className="button button-outline button-red "
                                onClick={() => onDelete(meeting)}
                    >Usuń
                    </button>
                    </td>
                    <td><button type="button"
                                className="button-outline"
                                onClick={() => onSignUp(meeting)}
                    >Zapisz się
                    </button>
                    </td>

                    <td><button type="button"
                                className="button-outline"
                                onClick={() => onSignOut(meeting)}
                    >Wypisz się się
                    </button>
                    </td>


                </tr>)
            }
            </tbody>
        </table>
    );
}
