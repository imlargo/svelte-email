<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import Example from '$lib/components/email/Example.svelte';


    let code = $state("");
    let compiled = $state("");
    async function convertComponent() {
        console.log(code);


        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        })

        const data = await response.json();
        compiled = (data.compiled);
    }
</script>

<div class="flex items-center justify-between px-24 py-12">
	<div class="grid grid-cols-2 gap-x-2 w-full">
        <div>
            <Textarea class="h-24 w-full" placeholder="Code" bind:value={code} />
            <Button onclick={convertComponent} class="mt-4">Convert</Button>
        </div>
        <div>
            {@html compiled}
        </div>
    </div>
</div>


<div class="flex w-full justify-center items-center">
<Example />        

</div>
