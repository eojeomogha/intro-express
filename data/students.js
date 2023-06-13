const students = [
    {student: 'Emmanuel', likes: 'Anime'},
    {student: 'Lexie', likes: 'League of Legends'},
    {student: 'Smithy', likes: 'Traveling'},
];

module.exports = {
    getAll: function() {
        return students;
    }
};