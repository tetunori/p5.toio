export class StandardId {
  protected static readonly idTable: { name: string; id: number }[];

  /**
   * Get standard ID string name.
   *
   * @param value Standard ID number value
   *
   * @returns ID name string. If specified standardID is not supported, this function returns undefined.
   */
  public static getIdName(value: number): string | undefined {
    for (const element of this.idTable) {
      if (element.id === value) {
        // Yes! Found.
        return element.name;
      }
    }

    // Not Found
    return undefined;
  }

  /**
   * Specified standard ID is included or not.
   *
   * @param idName Standard ID name. Set the element of this.names.
   *
   * @returns true iff specified standard ID is toio Collection card.
   */
  public static includes(idName: string): boolean {
    for (const element of this.idTable) {
      if (element.name === idName) {
        // Yes! Found.
        return true;
      }
    }

    // Not Found
    return false;
  }
}
