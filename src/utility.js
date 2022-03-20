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

export const chunkIntoN = (arr, n) => {
    const size = Math.ceil(arr.length / n)
    return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size))
}

export const shuffle_1 = [
    'primary',
    'tertiary',
    'primary',
    'secondary',
    'secondary',
    'primary',
    'tertiary',
    'primary',
    'tertiary',
]
export const shuffle_2 = [
    'tertiary',
    'primary',
    'secondary',
    'tertiary',
    'secondary',
    'tertiary',
    'secondary',
    'primary',
    'primary',
]
export const shuffle_3 = [
    'secondary',
    'tertiary',
    'primary',
    'secondary',
    'tertiary',
    'secondary',
    'primary',
    'secondary',
    'tertiary',
]

export const tags_1 = [
    {
        name: 'Popular',
        isPrimary: true,
    },
    {
        name: 'Hot',
        isPrimary: false,
    },
    {
        name: 'Trend',
        isPrimary: true,
    },
    {
        name: 'Entertain',
        isPrimary: false,
    },
]

export const tags_2 = [
    {
        name: 'Health',
        isPrimary: true,
    },
    {
        name: 'Politic',
        isPrimary: true,
    },
    {
        name: 'Sports',
        isPrimary: false,
    },
    {
        name: 'Science',
        isPrimary: true,
    },
]
