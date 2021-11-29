import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку

export class Drive {
  constructor(typeWD) {
    this.typeWD = typeWD;
    this.canDrive = this.canDrive.bind(this);
  }

  canDrive(cover) {
    switch (cover) {
      case "asphalt":
        return true;
      case "sand":
        if (this.typeWD === "AWD") {
          return true;
        }
        return false;
      case "rocks":
        return false;
      default:
        throw new Error("not implemented");
    }
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
// быть не чаще чем 1раз в 0,5сек).
export class Charger {
  time = {};
  chargeVehicle(vehicle) {
    if (vehicle instanceof ICECar) {
      throw new Error("not implemented");
    }
    if (
      vehicle instanceof ElectricCar &&
      vehicle.battery < 100 &&
      this.time[vehicle.id] == null
    ) {
      this.time[vehicle.id] = setTimeout(() => {
        vehicle.charge();
        this.time[vehicle.id] = null;
      }, 500);
    }
  }
}

// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей
export class Car extends Vehicle {
  static totalMillage = 0;

  trip(mileage) {
    try {
      super.trip(mileage);
      Car.totalMillage += mileage;
    } catch {
      throw new Error("not implemented");
    }
  }
}

export function getTotalCarsMileage() {
  return Car.totalMillage;
}
