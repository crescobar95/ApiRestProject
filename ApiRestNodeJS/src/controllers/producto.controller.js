import {producto} from "../models/producto.js";



export const getproducto= async (req, res) => {
    const {nombre_producto,valor,cantidad} = req.body

try{
    const newproducto =  await producto.findAll({
        nombre:nombre_producto,
        valor:valor,
        cantidad:cantidad
    });

    res.json(newproducto)
}catch(error){
    return res.status(500).json({message: error.message});

}}

export async function createproducto(req, res) {
  try {
    const { nombre_producto, valor, cantidad,id } = req.body;
    const newproduct = await producto.create({
      id,
      nombre_producto,
      valor,
      cantidad,
    });
    res.json(newproduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteproducto(req, res) {
    const { id } = req.params;
    try {
      await producto.destroy({
        where: {
          id
        },
      });
          return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  
};

export async function putproducto(req, res) {
  const { id } = req.params;
  try {
    
    const Producto = await producto.findOne({
      attributes: ["nombre_producto", "valor", "cantidad", "id"],
      where: { id },
    });

    Producto.set(req.body);

    await Producto.save();

    res.json(Producto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}