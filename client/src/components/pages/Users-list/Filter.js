const Filter = () => {
    return (
        <Form inline>
  <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
    Instrumento
  </Form.Label>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">Seleccionar...</option>
    <option value="1">Guitarra eléctrica</option>
    <option value="2">Guitarra española</option>
    <option value="3">Batería</option>
    <option value="4">Bajo</option>
    <option value="5">Piano</option>
    <option value="6">Voz</option>
    <option value="7">Trompeta</option>
    <option value="8">Acordeón</option>
    <option value="9">Saxofón</option>
    <option value="10">Trombón</option>
    <option value="11">Tuba</option>
    <option value="12">Gaita</option>
    <option value="13">Violín</option>
    <option value="14">Clarinete</option>
    <option value="15">Violonchelo</option>
    <option value="16">Contrabajo</option>
    <option value="17">Fagot</option>
    <option value="18">Ukelele</option>

  </Form.Control>
  <Form.Check
    type="checkbox"
    className="my-1 mr-sm-2"
    id="customControlInline"
    label="Recordar mi elección"
    custom
  />
  <Button type="submit" className="my-1">
    Filtrar
  </Button>
</Form>
    )
}