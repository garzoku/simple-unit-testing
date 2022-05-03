const result = require("../src/3")

test('return profile as object when professor name is entered', () => {
    const info = result.getMentorInfo(result.mentors, 'Etza')
    expect(info).toStrictEqual({ "fullName": "Professor Etza", "jobTitle": "Junior Developer", "name": "Etza", "title": "Professor", "yearsOfExperience": 30 })
})