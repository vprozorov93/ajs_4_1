import sortHeroes from '../index'

test.each([
    [[
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ],[
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]],
    [[
        {name: 'мечник', health: 100},
        {name: 'лучник', health: 80},
        {name: 'маг', health: 10},
      ],[
        {name: 'мечник', health: 100},
        {name: 'маг', health: 10},
        {name: 'лучник', health: 80},
      ]]
])(
    'test array equeal array_expected after sort',
    (expected, array) => {
        sortHeroes(array)
        for (let i =0; i < array.lenght; i++){
          expect(array[i]).toEqueal(expected[i])
        }
        
    }
)
