class HospitalEmployee {
  private _remainingVacationDays: number;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name(): string {
    return this._name;
  }

  get remainingVacationDays(): number {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff: number): void {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword(): number {
    return Math.floor(Math.random() * 10000)
  }
}

class Nurse extends HospitalEmployee {
  private _certifications: string[]

  constructor(name: string, certifications: string[]) {
    super(name);
    this._certifications = certifications;
  }

  get certifications(): string[] {
    return this._certifications;
  }

  addCertification(newCertification: string) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

class Doctor extends HospitalEmployee {
  private _insurance: boolean;

  constructor(name: string, insurance: boolean) {
    super(name);
    this._insurance = insurance;
  }

  get insurance(): boolean {
    return this._insurance;
  }

}

const doctorParker = new Doctor('Parker', false);
nurseOlynyk.takeVacationDays(5);
nurseOlynyk.addCertification('Genetics');
doctorParker.takeVacationDays(10);
