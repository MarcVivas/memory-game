export default function PersonalRecord ({record}) {
    if(record.value){
        return <span>Personal record: {record.value}</span>;
    }
    return null;
}