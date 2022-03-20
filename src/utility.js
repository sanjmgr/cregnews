export const readTime = (title, description, content) => {
    const titleWord = title.split(' ').length
    const descriptionWord = description.split(' ').length
    const contentWord = content.split(' ').length

    const word = titleWord + descriptionWord + contentWord
    const time = Math.ceil(word / 200)
    return time
}

export const dateFormat = date => {
    return new Date(date).toLocaleDateString('default', {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
    })
}
