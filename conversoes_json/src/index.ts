// Conversões de JSON

enum UserRole {
  admin,
  user,
}

class User {
  // -- Forma tradicional --
  public readonly type: UserRole
  public readonly id: number
  public readonly name: string
  public readonly staff: boolean
  public readonly date?: Date

  constructor(
    type: UserRole,
    id: number,
    name: string,
    staff: boolean,
    date?: Date
  ) {
    this.type = type
    this.id = id
    this.name = name
    this.staff = staff
    this.date = date ?? new Date()
  }

  // -- Atalho --
  // constructor(
  //   public readonly type: UserRole,
  //   public readonly id: number,
  //   public readonly name: string,
  //   public readonly staff: boolean
  // ) {}

  toJSON() {
    return {
      type: this.type,
      id: this.id,
      name: this.name,
      staff: this.staff,
      date: this.date,
    }
  }
}

const user1 = new User(UserRole.user, 1, 'John Doe', true)
console.log(user1)

// Convertendo para JSON
const json = JSON.stringify(user1)
console.log(json)

// const user2 = JSON.parse(json)
// console.log(user2)

const user2 = JSON.parse(json, (key: string, value: any) => {
  //   console.log(key, '->', value, '  ', typeof value)
  if (key === 'date') return new Date(value)
  if (key === '')
    return new User(value.type, value.id, value.name, value.staff, value.date)

  return value
})

console.log('\n\n')

console.log(user2)
console.log(user2 instanceof User)

// Verificando se o objeto é uma instância da classe User
console.log(user1 instanceof User) // true
console.log(user2 instanceof User) // false
