import { useState } from 'react'
import { Layout, Input } from 'components'

export const CadastroProdutos: React.FC = ()=>{

    const [sku, setSku] = useState<string>('');
    const [preco,  setPreco] = useState<string>('');
    const [ nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    const submit = ()=>{
        const produto = {
            sku, preco, nome, descricao
        }
        console.log(produto);
    }

    return (
        <div>
            <Layout titulo="Cadastro de Produtos">
                <div className="columns">
                    
                    <Input label='SKU' columnClasses='is-half' 
                            onChange={setSku} 
                            value={sku} id='inputSku' 
                            placeholder="Digite o Sku  do produto" />
                    
                    <Input label='Preço' columnClasses='is-half' 
                            onChange={setPreco} 
                            value={preco} id='inputPreco' 
                            placeholder="Digite o Preço  do produto" />

                    
                </div>

                <Input label='Nome' columnClasses='is-full'
                            onChange={setNome} 
                            value={nome} id='inputNome' 
                            placeholder="Digite o Nome  do produto"/>
                

                <div className="field">
                    <label htmlFor="inpuDesc" className="label">Descrição: *</label>
                    <div className="control">
                        <textarea className="textarea" 
                                id="inpuDesc" value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                                placeholder="Digite a Descrição do produto" />
                    </div>
                </div>
                
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={submit}>
                            Salvar
                        </button>
                    </div>

                    <div className="control">
                        <button className="button">
                            Voltar
                        </button>
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}