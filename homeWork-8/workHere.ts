// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
interface ISpacecraft {
  engineThrust: number;
  engineCount: number;
  engineType: string;
}

interface IDrive {
  stages?: ISpacecraft[];
  type?: string;
  power?: number;
  torque?: number;
  totalPower?: number;
  engineCount?: number;
  supportedEnvironments: string[];
}

type VehicleType = {
  type: string;
  brand: string;
  model: string;
  platform?: string;
  drive: IDrive;
};

export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"

class Vehicle {
  vehicle: VehicleType;
  constructor(vehicle: VehicleType) {
    this.vehicle = vehicle;
  }

  getTitle(): string {
    return `${this.vehicle.brand} - ${this.vehicle.model}`;
  }
  getInfo(): string {
    return `Supported environments: ${this.vehicle.drive.supportedEnvironments}`;
  }
}

class Car extends Vehicle {
  getInfo(): string {
    return `${super.getInfo()} Power: ${this.vehicle.drive.power}HP Torque: ${
      this.vehicle.drive.torque
    }Nm`;
  }
}

class Spacecraft extends Vehicle {
  getInfo(): string {
    const array = this.vehicle.drive.stages;
    const arrayResult = array.reduce(
      (sum, value) => {
        sum.thrust += value.engineThrust * value.engineCount;
        sum.count += value.engineCount;
        return sum;
      },
      { thrust: 0, count: 0 }
    );
    return `${super.getInfo()} Total thrust: ${
      arrayResult.thrust
    }kN Engine count: ${arrayResult.count}`;
  }
}

class Helicopter extends Vehicle {
  getInfo() {
    return "Under secret";
  }
}

// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
  switch (vehicle.type) {
    case "Car":
      return new Car(vehicle);
    case "Spacecraft":
      return new Spacecraft(vehicle);
    case "Helicopter":
      return new Helicopter(vehicle);
    default:
      return null;
  }
}
